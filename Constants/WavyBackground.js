import React from 'react';
import { View }from 'react-native'
import Svg, { Path } from 'react-native-svg'

export default function WavyHeader({ customStyles }) {
    return (
      <View style={customStyles}>
        <View style={{ backgroundColor: '#BE254C', height: 160 }}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', top: 130 }}
          >
            <Path
              fill="#BE254C"
              d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,154.7C672,149,768,107,864,101.3C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
    );
  }
  // M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,154.7C672,149,768,107,864,101.3C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
  // M0,224L26.7,224C53.3,224,107,224,160,202.7C213.3,181,267,139,320,138.7C373.3,139,427,181,480,176C533.3,171,587,117,640,90.7C693.3,64,747,64,800,96C853.3,128,907,192,960,213.3C1013.3,235,1067,213,1120,213.3C1173.3,213,1227,235,1280,202.7C1333.3,171,1387,85,1413,42.7L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z