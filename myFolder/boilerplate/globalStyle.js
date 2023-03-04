import {StyleSheet} from 'react-native';

const paddingAndMarginValue = {
  first: 5,
  second: 10,
  third: 15,
  fourth: 20,
};

const heightAndWeidth = {
  first: '100%',
  second: '95%',
  third: '90%',
  fourth: '80%',
  fifth: '75%',
};

const headingSize = {
  first: 32,
  second: 26,
  third: 22,
  fourth: 20,
  fifth: 18,
  sixth: 16,
  seventh: 14,
  eight: 12,
};

const borderRadius = {
  first: 5,
  second: 10,
  third: 15,
  fourth: 20,
  fifth: 25,
};

const theme = {
  color1: '#1d1c21', //background
  color2: '#f2f2f4', //color
  color3: '#009ABC', // use in button background
};

const boxShadowColor = '#202020';

const extraColor = StyleSheet.create({
  extraColor1: {backgroundColor: '#009ABC'},
  extraColor2: {backgroundColor: '#e6dff1'},
  extraColor3: {backgroundColor: '#f2eee9'},
  extraColor4: {backgroundColor: '#f1dfde'},
});

const Style = StyleSheet.create({
  // color
  // +++++++++++++
  themeColor1: theme.color1,
  themeColor2: theme.color2,
  bgColor: {
    backgroundColor: theme.color1,
  },
  color: {
    color: theme.color2,
  },
  // ++++++++++++++
  // Font Size
  // ++++++++++++++
  fs1: {
    fontSize: headingSize.first,
  },
  fs2: {
    fontSize: headingSize.second,
  },
  fs3: {
    fontSize: headingSize.third,
  },
  fs4: {
    fontSize: headingSize.fourth,
  },
  fs5: {
    fontSize: headingSize.fifth,
  },
  fs6: {
    fontSize: headingSize.sixth,
  },
  fs7: {
    fontSize: headingSize.seventh,
  },
  fs8: {
    fontSize: headingSize.eight,
  },
  // +++++++++++++++
  // Font Weight
  // +++++++++++++++
  fwb: {
    fontWeight: 'bold',
  },
  // +++++++++++++++
  // Height
  // +++++++++++++++
  h100: {
    height: heightAndWeidth.first,
  },
  h95: {
    height: heightAndWeidth.second,
  },
  h90: {
    height: heightAndWeidth.third,
  },
  h80: {
    height: heightAndWeidth.fourth,
  },
  h75: {
    height: heightAndWeidth.fifth,
  },
  // ++++++++++++++++
  // Margin
  // ++++++++++++++++
  m1: {
    margin: paddingAndMarginValue.first,
  },
  m2: {
    margin: paddingAndMarginValue.second,
  },
  m3: {
    margin: paddingAndMarginValue.third,
  },
  m4: {
    margin: paddingAndMarginValue.fourth,
  },
  mb1: {
    marginBottom: paddingAndMarginValue.first,
  },
  mb2: {
    marginBottom: paddingAndMarginValue.second,
  },
  mb3: {
    marginBottom: paddingAndMarginValue.third,
  },
  mb4: {
    marginBottom: paddingAndMarginValue.fourth,
  },
  mr1: {
    marginRight: paddingAndMarginValue.first,
  },
  mr2: {
    marginRight: paddingAndMarginValue.second,
  },
  mr3: {
    marginRight: paddingAndMarginValue.third,
  },
  mr4: {
    marginRight: paddingAndMarginValue.fourth,
  },
  mt1: {
    marginTop: paddingAndMarginValue.first,
  },
  mt2: {
    marginTop: paddingAndMarginValue.second,
  },
  mt3: {
    marginTop: paddingAndMarginValue.third,
  },
  mt4: {
    marginTop: paddingAndMarginValue.fourth,
  },
  ml1: {
    marginLeft: paddingAndMarginValue.first,
  },
  ml2: {
    marginLeft: paddingAndMarginValue.second,
  },
  ml3: {
    marginLeft: paddingAndMarginValue.third,
  },
  ml4: {
    marginLeft: paddingAndMarginValue.fourth,
  },
  mx1: {
    marginHorizontal: paddingAndMarginValue.first,
  },
  mx2: {
    marginHorizontal: paddingAndMarginValue.second,
  },
  mx3: {
    marginHorizontal: paddingAndMarginValue.third,
  },
  mx4: {
    marginHorizontal: paddingAndMarginValue.fourth,
  },
  my1: {
    marginVertical: paddingAndMarginValue.first,
  },
  my2: {
    marginVertical: paddingAndMarginValue.second,
  },
  my3: {
    marginVertical: paddingAndMarginValue.third,
  },
  my4: {
    marginVertical: paddingAndMarginValue.fourth,
  },
  // ++++++++++++++++
  // Padding
  // ++++++++++++++++
  p1: {
    padding: paddingAndMarginValue.first,
  },
  p2: {
    padding: paddingAndMarginValue.second,
  },
  p3: {
    padding: paddingAndMarginValue.third,
  },
  p4: {
    padding: paddingAndMarginValue.fourth,
  },
  pb1: {
    paddingBottom: paddingAndMarginValue.first,
  },
  pb2: {
    paddingBottom: paddingAndMarginValue.second,
  },
  pb3: {
    paddingBottom: paddingAndMarginValue.third,
  },
  pb4: {
    paddingBottom: paddingAndMarginValue.fourth,
  },
  pl1: {
    marginLeft: paddingAndMarginValue.first,
  },
  pl2: {
    marginLeft: paddingAndMarginValue.second,
  },
  pl3: {
    marginLeft: paddingAndMarginValue.third,
  },
  pl4: {
    marginLeft: paddingAndMarginValue.fourth,
  },
  pr1: {
    paddingRight: paddingAndMarginValue.first,
  },
  pr2: {
    paddingRight: paddingAndMarginValue.second,
  },
  pr3: {
    paddingRight: paddingAndMarginValue.third,
  },
  pr4: {
    paddingRight: paddingAndMarginValue.fourth,
  },
  pt1: {
    paddingTop: paddingAndMarginValue.first,
  },
  pt2: {
    paddingTop: paddingAndMarginValue.second,
  },
  pt3: {
    paddingTop: paddingAndMarginValue.third,
  },
  pt4: {
    paddingTop: paddingAndMarginValue.fourth,
  },
  px1: {
    paddingHorizontal: paddingAndMarginValue.first,
  },
  px2: {
    paddingHorizontal: paddingAndMarginValue.second,
  },
  px3: {
    paddingHorizontal: paddingAndMarginValue.third,
  },
  px4: {
    paddingHorizontal: paddingAndMarginValue.fourth,
  },
  py1: {
    paddingVertical: paddingAndMarginValue.first,
  },
  py2: {
    paddingVertical: paddingAndMarginValue.second,
  },
  py3: {
    paddingVertical: paddingAndMarginValue.third,
  },
  py4: {
    paddingVertical: paddingAndMarginValue.fourth,
  },
  // +++++++++++++++
  // Width
  // +++++++++++++++
  w100: {
    width: heightAndWeidth.first,
  },
  w95: {
    width: heightAndWeidth.second,
  },
  w90: {
    width: heightAndWeidth.third,
  },
  w80: {
    width: heightAndWeidth.fourth,
  },
  w75: {
    width: heightAndWeidth.fifth,
  },
  // ++++++++++++++++
  // flex
  // ++++++++++++++++
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  f3: {
    flex: 3,
  },
  fwrap: {
    flexWrap: 'wrap',
  },
  fNoWrap: {
    flexWrap: 'nowrap',
  },
  fdr: {
    flexDirection: 'row',
  },
  fdc: {
    flexDirection: 'column',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcs: {
    justifyContent: 'flex-start',
  },
  jce: {
    justifyContent: 'flex-end',
  },
  jcb: {
    justifyContent: 'space-between',
  },
  jca: {
    justifyContent: 'space-around',
  },
  jce: {
    justifyContent: 'space-evenly',
  },
  aic: {
    alignItems: 'center',
  },
  ais: {
    alignItems: 'flex-start',
  },
  aie: {
    alignItems: 'flex-end',
  },
  // +++++++++++++
  // center item
  // +++++++++++++
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ++++++++++++++
  // text center
  // ++++++++++++++
  tc: {
    textAlign: 'center',
  },
  // +++++++++++
  // text field style
  // +++++++++++
  inputArea: {
    width: '90%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#333',
    fontSize: 18,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    color: '#333',
  },
  // +++++++++++++
  // box shadow
  // +++++++++++++
  shadow1: {
    shadowColor: boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  shadow2: {
    shadowColor: boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  shadow3: {
    shadowColor: boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
  shadow4: {
    shadowColor: boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 17.43,
    elevation: 21,
  },
  shadow5: {
    shadowColor: boxShadowColor,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  //++++++++++++++
  //   Border Radius
  // ++++++++++++++
  br1: {
    borderRadius: borderRadius.first,
  },
  br2: {
    borderRadius: borderRadius.second,
  },
  br3: {
    borderRadius: borderRadius.third,
  },
  br4: {
    borderRadius: borderRadius.fourth,
  },
  br5: {
    borderRadius: borderRadius.fifth,
  },
  br50: {
    borderRadius: 50,
  },
  // ++++++++++++
  // button
  // ++++++++++++
  button: {
    width: '80%',
    height: 70,
    borderRadius: 10,
    backgroundColor: theme.color3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 22,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Style;
export {extraColor};
