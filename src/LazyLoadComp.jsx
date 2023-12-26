import React from 'react'


const LazyLoadComp = ({filePath}) => {
    console.log(filePath)
    const Component = React.lazy(() => import(`${filePath}`));


  return (
    <React.Suspense fallback={<>...</>}>
             <Component/>
            </React.Suspense>
  )
}

export default LazyLoadComp