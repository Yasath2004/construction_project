import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const Dashboard = () => {
  return (
    <>
    <Header/>
    <main className='dashboard'>
        <div  className='container my-5'>
        <div className='row'>
            <div className='col-md-3'>
                <div className='card shadow border-0'>
                    <div className='card-body'>
                        <h4>Sidebar</h4>
                    </div>
                 </div>
                {/*sidebard */}
            </div>
            <div className='col-md-9'>
                 {/*sidebard */}
                 <div className='card shadow border-0'>
                    <div className='card-body d-flex justify-content-center'>
                        <h4>welcome to admin console</h4>
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
