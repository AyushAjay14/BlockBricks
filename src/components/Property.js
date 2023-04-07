import React , {useState} from 'react'
import {property} from './Data';
import Toggle from './Toggle';
function Property() {
    const [home, sethome] = useState();
    const [toggle, setToggle] = useState(false);
    const togglePop = (home)=>{
        sethome(home);
        toggle ? setToggle(false) : setToggle(true);
    }
  return (
    <>
    <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Property Listing</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {property.map((e , i)=>{
                                return(
                                    <>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" onClick={()=> togglePop(e)}>
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <img className="img-fluid" src={`img/property-${i+1}.jpg`} alt="" />
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">{e.price} ETH</h5>
                                        <p className="d-block h5 mb-2" href="">{e.title}</p>
                                        <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{e.address}</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{e.area}</small>
                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{e.beds} Bed</small>
                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{e.bath} Bath</small>
                                    </div>
                                </div>
                            </div>
                                    </>
                                )
                            })}
                            <div className="col-12 text-center">
                                <a className="btn btn-primary py-3 px-5" href="">Browse More Property</a>
                            </div>
                        </div>
                        {toggle && (
        <Toggle home={home} togglePop={togglePop} />
      )}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Property;
