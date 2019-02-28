import React from 'react';
import {compose} from 'recompose';
import{style} from './MapStyle';
import {WithStyles, withStyles} from '@material-ui/core';

interface IMapProps extends WithStyles<typeof style>{
    // id:string;
    // options:any;
    // onMapLoad:(map:any)=>any;
}
interface IOutterMapProps{
    id:string;
    options:any;
    customeStyles:any
    onMapLoad:(map:any)=>any;
}

type enchatedtype = IMapProps & IOutterMapProps;

class Map extends React.Component<enchatedtype,{}> {
    constructor(props:enchatedtype) {
      super(props);
      this.onScriptLoad = this.onScriptLoad.bind(this)
    }
  
    onScriptLoad() {
      const map = new (window as any).google.maps.Map(
        document.getElementById(this.props.id),
        this.props.options);
       // map.set('style',this.props.customeStyles)
       map.setOptions('styles',this.props.customeStyles)
      this.props.onMapLoad(map)
    }
  
    componentDidMount() {
      if (!(window as any).google) {
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDwbwOUYvDI29cdOLyO3Nkv0YtkSCCnwhw`;
        const x:HTMLElement|null = document.getElementsByTagName('script')[0];
        if(x.parentNode !=null){
            x.parentNode.insertBefore(s, x);
        // Below is important. 
        //We cannot access google.maps until it's finished loading
        s.addEventListener('load', e => {
          this.onScriptLoad()
        })
        }
        
      } else {
        this.onScriptLoad()
      }
    }
  
    render() {
      return (
        <div className={this.props.classes.root} id={this.props.id} />
      );
    }
  }

  const enchanted = compose<enchatedtype,IOutterMapProps>(
    withStyles(style)
  );
  
  export default enchanted(Map);