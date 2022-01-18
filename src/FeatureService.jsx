import React from 'react'
import MapViewer from "./images/map-viewer.png"
import GisDataExplorer from "./images/map-viewer.png"
import GisPortal from "./images/gis-portal.png"

const FeatureService = () => {
    return (
        <>
                <section id="featured-services">
        <div className="container">
          <div className="row">

            <div className="col-4 box">
              <a href="#">
              <div className="icon"><img src={MapViewer} />  </div>
              <h4 className="title"><a href="">Map Viewer</a></h4>
            
            </a>
            </div>

            <div className="col-4 box box-bg">
              <a href="#">
              <div className="icon"><img src={GisDataExplorer} />  </div>
              <h4 className="title"><a href="">GIS Data Explorer</a></h4>
            </a>
            
            </div>

            <div className="col-4 box">
              <a href="#">
              <div className="icon"><img src={GisPortal} />  </div>
              <h4 className="title"><a href="">NEOM GIS Portal</a></h4>
            </a>
            
            </div>

          </div>
        </div>
      </section>  
        </>
    )
}
     
export default FeatureService
