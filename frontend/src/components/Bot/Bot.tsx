import React, {FC, memo, useState} from 'react';
import {Button, Card, Col, DatePicker, Divider, Flex, notification, Row, Slider, Space, Typography} from 'antd';
import StockTable from "./StockTable";
import {BellOutlined} from "@ant-design/icons";

const locStorageValue = localStorage.getItem('notify');

const Bot: FC<{ removeBroker: () => void, broker: string }> = memo(({broker, removeBroker}) => {
    const [value, setValue] = useState(0);
    const [notify, setNotify] = useState(typeof locStorageValue === "undefined" ? true : locStorageValue === 'true');

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string) => {
        api.open({
            message: message,
            placement: 'topRight'
        });
    };

    function onNotifyClick(): void {
        setNotify((prev) => !prev);
        localStorage.setItem('notify', !notify ? 'true' : 'false');
        openNotification(!notify ? 'Уведомления включены' : 'Уведомления выключены');
    }


    return (
        <>
            {contextHolder}
            <Card bordered={true} size={"small"}
                  headStyle={{background: 'black', padding: '24px 64px'}}
                  title={<>
                      <Flex gap={16} align={'baseline'}>
                          <Typography.Title level={2} style={{margin: 0, marginBottom: 0, color: 'white'}}>Трейдер
                              бот
                          </Typography.Title>
                          <Button type="primary" shape="circle"
                                  style={!notify ? {background: '#dedcdc', color: 'black', borderColor: 'black'} : {}}
                                  ghost={!notify}
                                  title={notify ? 'Уведомления включены' : 'Уведомления выключены'}
                                  onClick={onNotifyClick}
                          >
                              <Flex vertical justify={'center'} align={'center'}>
                                  <BellOutlined/>
                              </Flex>
                          </Button>

                          <Typography.Title level={4} style={{margin: 0, marginBottom: 0, color: 'white',marginLeft: 'auto'}}>
                              Брокер: {broker}
                          </Typography.Title>
                          <Button onClick={removeBroker} type={'primary'}>
                              Сменить брокера
                          </Button>
                      </Flex>
                  </>
                  }
                  style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', padding: 0}}
                  bodyStyle={{padding: '20px 64px'}}
            >

                <Row justify={'space-between'} align={'stretch'}>
                    <Col span={6} style={{height: '100%', paddingTop: 25}}>
                        <Space direction={'vertical'} size={40}>
                            <div>
                                <h2 style={{paddingBottom: 20}}>Настройки</h2>
                                <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 10}}>Время
                                    инвестирования</h3>
                                <DatePicker.RangePicker style={{width: 300}}
                                                        placeholder={['Старт', 'Конец']}/>
                            </div>
                            <div>
                                <h3 style={{fontSize: 16, fontWeight: 600, marginBottom: 10}}>Уровень
                                    риска</h3>
                                <Slider max={5} min={1} onChange={setValue} value={value}
                                        tooltip={{formatter: null}}/>
                            </div>
                            <Button size={'large'} type={'primary'} style={{width: '100%'}}>Запустить</Button>
                        </Space>
                    </Col>
                    <Col span={16}>

                        <Card style={{width: '100%', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <h2 style={{paddingBottom: 20}}>Мой портфель</h2>
                            <Row justify={'space-between'}>
                                <Col span={8}>
                                    <Card bodyStyle={{
                                        paddingBottom: 37,
                                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                                    }}>
                                        <div>
                                            <h3 style={{fontSize: 16, fontWeight: 600}}>Текущее
                                                состояние:</h3>
                                            <p style={{fontSize: 24, fontWeight: "bold"}}>350000 <span
                                                style={{color: '#06AB03'}}>+ 120%</span></p>
                                            <Divider style={{margin: '10px 0'}}/>
                                            <h3 style={{fontSize: 16, fontWeight: 600}}>Текущее
                                                состояние:</h3>
                                            <p style={{fontSize: 24, fontWeight: "bold"}}>350000</p>
                                            <Divider style={{margin: '10px 0'}}/>
                                            <h3 style={{fontSize: 16, fontWeight: 600}}>Предсказанная
                                                сумма:</h3>
                                            <p style={{fontSize: 24, fontWeight: "bold"}}>350000</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col>
                                    <StockTable/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>

                <h2 style={{fontSize: 24, marginBottom: 30}}>
                    История действий бота:
                </h2>

                <StockTable/>

            </Card>
        </>
    );
});

export default Bot;
