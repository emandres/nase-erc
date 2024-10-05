import { List, Space, Typography } from "antd"
import { S3Link, formatS3Url } from "../S3"
import './Index.css'
//import PopoutLink from "../PopoutLink"

const { Title } = Typography

const files = [
  { title: 'Crisis Cleanup Flier - English', path: 'helene/Helene_social_media_8449651386_en-US.png' },
  { title: 'Folleto de Crisis Cleanup - Español', path: 'helene/Helene_social_media_8449651386_es-MX.png' },
  { title: 'Vehicle Placard - REQUIRED IN FLORUDA ONLY', path: 'ian/florida-dashboard-placard.pdf' }
]

export default () => {
  return <Space direction="vertical" size="large">
    <Title level={2}>Hurricane Helene</Title>

    <Title level={3}>Command Centers</Title>
    <div className="row">
      <div className="column">     
      <section>
        <Space direction="vertical">
          <a href="helene/lenior">Lenior</a> 
          <a href="https://sites.google.com/view/ashevillecommandcenter/home">Asheville</a>
          <a href="helene/aiken">Aiken</a>
          <a href="helene/savannah">Vidalia</a>
          <a href="helene/douglas">Douglas</a>
          <a href="helene/waycross">Waycross</a>
          <a href="helene/valdosta">Valdosta</a>
          <a href="helene/madison">Madison</a>
          <a href="helene/lakecity">Lake City</a>
          <a href="helene/chiefland">Chiefland</a>
          <a href="helene/stpetersburg">St. Petersburg</a>   
        </Space>
      </section> 
     </div>
     <div className="column">
      <section>
          <Space direction="vertical">
            <img
              src={formatS3Url('helene/Helene-Week1.png')}
              alt="Command Centers Map" 
              style={{ maxWidth: 200 }}
             />
            <cite>Screenshot</cite>
          </Space>
        </section>
      </div>
    </div>



    <section>
      <Title level={3}>Files</Title>
      <List
        dataSource={files}
        renderItem={item => <List.Item><S3Link path={item.path}>{item.title}</S3Link></List.Item>}
        rowKey={item => item.path} />
    </section>
  </Space>
}