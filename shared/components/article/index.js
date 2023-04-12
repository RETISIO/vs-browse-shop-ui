/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable jsx-quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import ArticleDetails from './articleDetails'
import ArticleListing from './articleListing'

export default function Article(props) {
  return (
    <>
      {props.fromEntityReference ? (
        <>
          <ArticleListing props={props} />
        </>
      ) : (
        <ArticleDetails props={props} />
      )}
    </>
  )
}
