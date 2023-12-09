import React, {useEffect, useState} from "react";
import {Avatar, Divider, Flex, Layout as LayoutAnt, Menu, Typography} from "antd";
import Search from "antd/es/input/Search";
import styles from "./Layout.module.scss";
import Main from "../Main/Main";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Stock from "../Stock/Stock";
import {BankOutlined, FileOutlined, LineChartOutlined, TeamOutlined} from "@ant-design/icons";
import StockCatalog from "../StockCatalog/StockCatalog";
import Bot from "../Bot/Bot";


const {Content, Sider} = LayoutAnt;

interface PropsType {
}

const Layout: React.FC<PropsType> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation().pathname;
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <LayoutAnt className={styles.main}>
            <Sider style={{position: 'fixed', height: '100%'}}
                   collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={'light'}>
                <div style={{fontSize: 24, textAlign: 'center', margin: '33px 0 19px'}}><span
                    style={{color: 'red'}}>AI</span>
                    {!collapsed && <span> биржа</span>}
                </div>
                <Menu theme="light" selectedKeys={[location]} mode="inline">
                    <Menu.Item key="/">
                        <Link to="/">
                            <BankOutlined/>
                            <span>Главная</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/stock-catalog">
                        <Link to="/stock-catalog">
                            <LineChartOutlined/>
                            <span>Каталог Акций</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/bot">
                        <Link to="/bot">
                            <TeamOutlined/>
                            <span>Торговый бот</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <LayoutAnt className={styles.content}
                       style={{padding: '33px 50px', paddingLeft: 250, margin: '0 auto', maxWidth: '1920px'}}>
                <Flex gap={5} justify={"space-between"}>
                    {location !== '/stock-catalog' ?
                        <a href={'https://www.youtube.com/watch?v=ykgqawluo5E'} style={{maxWidth: 350, width:'100%'}}><Search allowClear
                                                                                        style={{maxWidth: 350}}
                                                                                        placeholder={'Введите поиск'}/></a> :
                        <div />}

                    <Flex gap={30} align={'center'}>
                        <Typography style={{fontSize: 16, fontWeight: 400}}>{date.toLocaleString('ru', {
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZoneName: 'longOffset'
                        })}</Typography>
                        <Typography style={{fontSize: 16, fontWeight: 500}}>{date.toLocaleString('ru', {
                            month: 'numeric',
                            year: 'numeric',
                            day: 'numeric'
                        })}</Typography>

                        <Flex align={'center'} gap={16}>
                            <Avatar
                                size={34}
                                src={"https://resources.cdn-kaspi.kz/shop/media" +
                                "s/sys_master/images/images/he5/h42/49528671633438/heineken-pivo-svetloe-5-5-l-104208369-1.jpg"}/>
                            <Typography style={{fontSize: 16, fontWeight: 'bold'}}>Илья Нестеров</Typography>
                        </Flex>
                    </Flex>
                </Flex>
                <Divider/>
                <Content>
                    <Routes>
                        <Route path="" element={<Main/>}/>
                        <Route path="card" element={<Stock/>}>
                            <Route path=":id"  element={<Stock/>}/>
                        </Route>
                        <Route path="stock-catalog" element={<StockCatalog/>}/>
                        <Route path="bot" element={<Bot/>}/>
                    </Routes>
                </Content>
            </LayoutAnt>
        </LayoutAnt>
    );
};

export default Layout;
