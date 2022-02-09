module.exports = {
  variants: {
    extend: {
        animation: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        symbols: ['WebSymbolsRegular'],
        bebas: ['BebasNeue'],
      },
      animation: {
        'engranaje-lento': 'spin 4s linear infinite',
        'paAbajo': 'paAbajo 3s linear',
        'palaDerecha': 'palaDerecha 3s linear'
      },
      keyframes: {
        paAbajo: { 
          '0%': { transfrom: 'translateY(0%)'},                     
          '50%': { transform: 'transalateY(150%)'},                     
          '100%': { transform: 'translateY(0%)'}                 
        },                
        palaDerecha: { 
            '0%': { transform: 'transalateX(150%)'},
            '100%': { transform: 'translateX(0%)'}
        }
      }
    }
  }
}