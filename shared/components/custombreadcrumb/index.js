/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Loader } from '../loader'

function CustomBreadcrumb (props) {
  const router = useRouter()

  const [pageContentData, setPageContent] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const prdObj = [
      {
        isRootCategory: false,
        id: props?.payLoad?.products[0]?.productId,
        name: props?.payLoad?.products[0]?.displayName
      }
    ]
    const navPath = props?.payLoad?.navigationPath || []
    setPageContent([...navPath, ...prdObj])
  }, [props])

  useEffect(() => {
    router.events.on('routeChangeStart', url => {
      setLoading(true)
    })
    router.events.on('routeChangeComplete', url => {
      setLoading(false)
    })
    router.events.on('routeChangeError', url => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading && <Loader />}
      <nav className='breadcrumbs-block hidden-print'>
        <ol className='breadcrumb'>
          <li key={1}>
            <Link href='/'>Home</Link>
          </li>
          {pageContentData?.map((item, _key) => (
            <li className={!item?.isRootCategory ? 'active' : ''} key={_key}>
              {pageContentData?.length - 1 !== _key ? (
                <Link href={`/category/${item.id}?N=${item.id}`}>
                  {item?.name}
                </Link>
              ) : (
                <span>{item?.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default CustomBreadcrumb
