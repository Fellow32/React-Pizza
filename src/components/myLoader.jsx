import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
  className="pizza-block" 
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="98" y="69" rx="0" ry="0" width="14" height="2" /> 
    <rect x="2" y="333" rx="0" ry="0" width="280" height="84" /> 
    <rect x="298" y="267" rx="0" ry="0" width="1" height="12" /> 
    <rect x="-1" y="427" rx="2" ry="2" width="89" height="27" /> 
    <rect x="329" y="438" rx="0" ry="0" width="98" height="36" /> 
    <rect x="186" y="425" rx="2" ry="2" width="89" height="27" /> 
    <rect x="87" y="287" rx="0" ry="0" width="1" height="1" /> 
    <rect x="122" y="184" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="140" cy="129" r="130" /> 
    <rect x="2" y="285" rx="2" ry="2" width="280" height="24" />
  </ContentLoader>
)

export default MyLoader