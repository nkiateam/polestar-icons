export default ({
    fontFamily = 'polestar',
    prefix = 'icon',
}) => {
    const generateTime = Math.floor(Date.now() / 1000);

    return `@font-face {
  font-family: '${fontFamily}';
  src: url('../fonts/${fontFamily}.eot?${generateTime}');
  src: url('../fonts/${fontFamily}.eot?${generateTime}#iefix') format('embedded-opentype'),
       url('../fonts/${fontFamily}.woff2?${generateTime}') format('woff2'),
       url('../fonts/${fontFamily}.woff?${generateTime}') format('woff'),
       url('../fonts/${fontFamily}.ttf?${generateTime}') format('truetype'),
       url('../fonts/${fontFamily}.svg?${generateTime}#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="${prefix}-"]:before, [class*=" ${prefix}-"]:before {
  font-family: "${fontFamily}";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
 
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

`;
};
