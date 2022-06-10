import * as React from 'react'
import { ConsentAlert, Layout } from './src/components'

const wrapper = ({ element }) => {
  const safeWindow = typeof window !== 'undefined' ? window : { location: null }
  return (
    <>
      <ConsentAlert
        location={safeWindow.location}
      />
      <Layout>
        {element}
      </Layout>
    </>
  )
}

export default wrapper