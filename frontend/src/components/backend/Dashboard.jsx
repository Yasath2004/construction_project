import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <main className='dashboard'>
        <div  className='container'>
        <div className='row'>
            <div className='col-md-3'>
                {/*sidebard */}
            </div>
            <div className='col-md-9'>
                 {/*sidebard */}
                 <div className='card shadow border-0'>
                    <div className='card-body'>
                        <h4>Dashboard</h4>
                    </div>
                 </div>
            </div>
        </div>
        </div>


    </main>

    <Footer/>
      
    </>
  )
}

export default Dashboard
