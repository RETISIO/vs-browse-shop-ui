/* eslint-disable import/named */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Template from '../template';

function NewHeader(props) {
  // const [rootCatagories, setRootCatagories] = useState([]);
  // const getData = async() => {
  //   const res = await requestContructor('getCategoryList', '', {}, false);
  //   setRootCatagories(res?.payLoad?.categories);
  //   return res?.payLoad?.categories;
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      {props.headerContent
        ? (
          <Template
            templateData={props.headerContent}
            {...props}
          />
        ) : null}
    </>
  );
}

export default NewHeader;
