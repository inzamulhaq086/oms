module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
      },
      colors: {
        PrimeryColor : '#221FCB',
        PrimeryColorDark : '#1918b5',
        SecondaryColor : '#00B9A7',
        ThirdColor : '#211F2B',
        SuccessColor : '#07B476',
        SuccessColorDeep : '#06ad70',
        InfoColor : '#00B0FF',
        InfoColorDark : '#00a3ec',
        DangerColor : '#EE0000',
        WarningColor : '#FFA800',
        TextColor : '#3C3C4C',
        TextColor80 : '#777778',
        TextColor50 : '#BDBEC7',
        TextColor40 : '#ebebf0',
        LightGray : '#F3F4FB',
        hoverBlue: '#d3d3f6',
        hoverBlueLight: '#ebebfa',
        hoverText: '#6a6af7',
        DangerColorDeep: '#d00101',
        TextColor30: '#EEEEEE',
        lightGray80 : '#F3F3F3'
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        'content-area': 'calc(100vh - 112px)',
      },
      width: {
        '92': '23rem'
      },
      spacing:{
        '92': '23rem',
        "row": "calc(100% + 2rem)",
        'angleDown' : "calc(50% - 14px)",
        '13px' : '13px',
        '150px' : '150px'
      },
      minHeight: {
        'content-area': 'calc(100vh - 112px)',
      },
      font: {
        '10px' : '10px'
      }
    },
  },
  plugins: [],
}
