/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/named */
import { useState, useEffect } from 'react'
import { LoginModel } from '@retisio/sf-ui'
import { useRouter } from 'next/router'
import { Modal } from 'react-bootstrap'
import { getCookie } from '@retisio/sf-api'
// import { LoginModel } from '../loginModel';
import { login } from '../ThirdPartyScripts/Events'
import { useAppContext } from '../../context/appContext'
import { requestContructor } from '../../helpers/api'
import ResetPassword from '../ResetPassword'
import { useMiniCartDataContext } from '../../context/miniCartcontext'
import getPersonalization from '../../helpers/utils'

export function Index (props) {
  const { show, setShow } = useAppContext()
  const { setisLogged, noReload } = useAppContext()
  const { openReset, updateOpenReset } = useAppContext()
  const [errorBanner, setErrorBanner] = useState(false)
  const [passwordRegex, setPasswordRegex] = useState([])
  const [passwordErrors, setPasswordErrors] = useState([])
  const router = useRouter()
  const { page } = router.query
  const { asPath } = useRouter()

  const getData = async () => {
    const res = await requestContructor('getPasswordPolicy', '', {}, false)
    return res
  }

  useEffect(() => {
    getData().then(data => {
      getPasswordPattern(data)
    })
  }, [])

  useEffect(() => {
    if (getCookie('lu')) {
      setisLogged(true)
    }
  }, [])

  const getPasswordPattern = data => {
    const policy = data && data?.passwordPolicies[0]?.rules
    let regex = []
    let errors = []
    policy.map(policy => {
      const reg = policy.regex.replaceAll('/', '')
      const regPattern = new RegExp(`(?=.*${reg})`)
      regex.push(regPattern)
      errors.push(policy.errorMsg)
    })
    regex = regex.join('').replaceAll('/', '')
    regex = new RegExp(regex)
    setPasswordRegex(regex)
    errors = errors.join('. ')
    setPasswordErrors(errors)
  }

  const { miniCartDetails } = useMiniCartDataContext()
  const cartID = miniCartDetails?.miniCartData?.cartId
  const triggerMergeCart = async () => {
    const data = await requestContructor('mergeCart', '', {
      method: 'POST',
      data: { anonymousCartId: cartID }
    })
    return data
  }

  const personaliseData = async () => {
    const data = await getPersonalization()
    return data
  }

  const reloadToPath = () => {
    if (!noReload) {
      if (page) {
        window.location.href = page
      } else {
        window.location.href = asPath
      }
    }
    setShow(false)
  }

  const handleSubmitForm = async data => {
    login(data.userName)
    const loginData = await requestContructor('signIn', '', {
      method: 'POST',
      data
    }).then(
      res => {
        if (res) {
          if (getCookie('lu')) {
            setisLogged(true)
            const isMergeCart = !!getCookie('arcCartId')
            const pData = personaliseData()
            pData.then(() => {
              if (isMergeCart) {
                const result = triggerMergeCart()
                result.then(mergeRes => {
                  if (mergeRes.status === 200) {
                    reloadToPath()
                  }
                }).catch(e=>{
                  reloadToPath()
                })
              } else {
                reloadToPath()
              }
            })
          }
        }
      },
      error => {
        if (error) {
          setErrorBanner(true)
        }
      }
    )
    return loginData
  }
  return (
    <div>
      {props.children}
      <Modal
        show={show}
        size='lg'
        onHide={() => {
          setShow(false)
        }}
        className='modal-login'
      >
        <LoginModel
          modelState={setShow}
          errorBanner={errorBanner}
          setErrorBanner={setErrorBanner}
          handleSubmitForm={data => handleSubmitForm(data)}
          openReset={updateOpenReset}
          passwordRegex={passwordRegex}
          passwordErrors={passwordErrors}
        />
      </Modal>
      <ResetPassword open={openReset} close={updateOpenReset} />
    </div>
  )
}
export default Index
