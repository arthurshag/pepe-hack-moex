import React, {FC} from 'react';
import {Card, Divider, Flex, Typography} from 'antd';


const About: FC = () => {


    return (
        <Card bordered={true} size={"small"}
              headStyle={{background: 'black', padding: '24px 64px'}}
              title={
                  <Flex vertical
                        gap={'small'} style={{color: 'white'}}
                  >
                      <Typography.Title level={2} style={{margin: 0, marginBottom: 0, color: 'white'}}>О
                          нас</Typography.Title>
                  </Flex>
              }
              style={{boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', padding: 0}}
              bodyStyle={{padding: '24px 64px'}}
        >
            <Typography.Title level={2}>
                Мы команда PEPE TEAM
            </Typography.Title>
            <Divider/>
            <Typography.Text>
                Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые
                Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы
                самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик,
                давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые
                крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые
                крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай
                сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые
                Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы
                самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы
                самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик,
                давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые
                крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай
                сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые.
                Мы самые крутые Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые
                Турик, давай сам.Мы самые крутые Турик, давай сам Мы самые крутые. Мы самые крутые Турик, давай сам.Мы
                самые крутые Турик, давай сам Мы самые крутые.
            </Typography.Text>
        </Card>

    );
};

export default About;
