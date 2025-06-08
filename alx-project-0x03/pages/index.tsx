import Layout from '@/layouts/Layout'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="pt-24 pb-10"> {/* Add padding to account for fixed header */}
          <h1 className="text-4xl font-bold text-center">Welcome to Splash App</h1>
          <p className="text-center mt-4">This is using the shared layout component</p>
        </div>
      </Layout>



    </div>
  )
}

export default HomePage
