import React, { useState } from "react";
import { View, Text } from "react-native";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import color from "../../../components/common/colors";
import Accordion from 'react-native-collapsible/Accordion';
import { useDimentionsContext } from "../../../context";
import style from "./style";

const ExtraDetails = () =>{
    const dimensions = useDimentionsContext();
    const responsiveStyle = style(dimensions.windowHeight, dimensions.windowWidth, dimensions.portrait);
    const [currentActiveSections, setActiveSections] = useState([0]) // zero means default opening the zeroth index

    const SECTIONS = [
        {
          title: 'Manufacture Details',
          content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        },
        {
          title: 'Product Disclaimer',
          content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham....',
        },
        {
        title: 'Features & Details',
        content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham....',
        },
    ];

    const _renderHeader = (section) => {
        return (
            <View style={responsiveStyle.collabsibleTitleView}>
                <Text style={responsiveStyle.titleText}>{section.title}</Text>
                <AntDesign name="down" size={18} color={color.black} />
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={responsiveStyle.collabsibleContentStyle}>
                <Text style={{color:color.grey}}>{section.content}</Text>
            </View>
        );
    };

    const _updateSections = (currentActiveSections) => {
        setActiveSections(currentActiveSections);
    };

    return(
    <View>
        <Accordion
            sections={SECTIONS}
            activeSections={currentActiveSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            underlayColor={'transperent'}
            sectionContainerStyle={{borderBottomWidth:1,borderBottomColor:color.grey}}
        />
    </View>
        
    )
}

export default ExtraDetails