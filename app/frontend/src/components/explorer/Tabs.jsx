import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const tabs = props =>
    <Tabs 
        gridArea='content' 
        variant="soft-rounded"
        display='flex'
        alignItems='flex-start'>
        <TabList w='100%'>
            <Tab>Explorar</Tab>
            <Tab>Trabalhos nossos</Tab>
            <Tab>Sugestões</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
            <TabPanel>
            <p>two!</p>
            </TabPanel>
            <TabPanel>
            <p>three!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
export default tabs