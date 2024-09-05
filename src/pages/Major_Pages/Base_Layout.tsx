
import { Layout, theme } from 'antd';
import App_Sidebar from '../../layouts/App_Sidebar';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;



const Base_Layout = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();



    return (
        <Layout style={{height:'100vh'}}>
            <App_Sidebar />
            <Layout>
                <Header style={{ padding: 0, background: 'green',color:'white',textAlign:'center' }}>Transport 1.00</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: '100%',
                            background: 'gray',
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center',background:'green',color:'white' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Base_Layout
