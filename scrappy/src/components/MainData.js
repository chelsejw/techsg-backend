import React from 'react'
import Table from './Table'
import RingLoader from 'react-spinners/RingLoader'

const MainData = (props) => {

    const {failure, loading, lastUpdate, data} = props

    return (
        <div>
          {!failure && !loading && 
            (<div>
              <div className="text-center">Last added jobs: {lastUpdate}</div>
              <Table data={data} />
            </div>)}
          {loading && (<div className="my-5">
              <RingLoader
                css={"margin: 0 auto;"}
                color={"#d84242"}
                size={150}
                loading={loading}
              />
              <div className="text-center mt-3">
                <span className="main-loading-txt">Getting jobs...</span>
              </div>
            </div>)}

          {failure && <div className="text-center mt-3">
                <span className="main-loading-txt">Failed to get jobs.</span>
              </div>}
        </div>
    )
}

export default MainData