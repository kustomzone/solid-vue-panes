import ToastMixin from '@/mixins/ToastMixin'
import ActivityMixin from '@/mixins/ActivityMixin'
import { v4 as uuidv4 } from 'uuid';


export default {
  mixins: [ToastMixin, ActivityMixin],
  data: function () {
    return {
      //    tension : {privacy:"public"}
    }
  },
  created(){

  },
  methods: {
    colorize(str) {
      var col = ""
      for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
      col = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
      //return '#' + Array(6 - col.length + 1).join('0') + col;
      var ret = this.hexToRgb('#' + Array(6 - col.length + 1).join('0') + col);
      if( ret.blue  > 200 && ret.green > 200 && ret.red > 200){
        // couleur trop claire
        ret.green =  100
      }

      return ret

    },
    hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
      } : null;
    },
    takePicture(canvas, name){
      //  let params = JSON.parse(localStorage.getItem('params'));
      //var name = $('#toggleSourceBtn').text()+' sur '+params.ip+' de '+$('#datetimepicker2 input')[0].value+" à " +$('#datetimepicker3 input')[0].value+".png";
      name = name+".png";

      //var canvas = document.getElementById(chartId);
      var dataURI = this.canvasToImage(canvas, "white")
      /*<a href="%dataURI%" download>download</a>*/
      var downloadLink = document.createElement("a");
      downloadLink.download = name;
      downloadLink.innerHTML = "Download File";
      if(navigator.userAgent.indexOf("Chrome") != -1)
      {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        console.log("CHROME");
        downloadLink.href = window.URL.createObjectURL(dataURI);
      } else
      {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        console.log("FF");
        downloadLink.href = dataURI;
        downloadLink.target="_blank";
        //downloadLink.onclick = destroyClickedElement;
        //downloadLink.onclick = window.URL.revokeObjectURL(downloadLink);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        //  console.log(app.$.popupTtl);
      }
      console.log(downloadLink);
      /*downloadLink.click();*/
      /* creation d'un event car download.click() ne fonctionne pas sous Firefox */
      var event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0
        , false, false, false, false, 0, null
      );
      downloadLink.dispatchEvent(event);
      //var app = this;
      setTimeout(function(){
        console.log(downloadLink.parentNode);
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(downloadLink);
      }, 1000);
    },
    canvasToImage(canvas, backgroundColor){
      //cache height and width
      var w = canvas.width;
      var h = canvas.height;
      var context = canvas.getContext("2d");
      var data;

      if(backgroundColor)
      {
        //get the current ImageData for the canvas.
        data = context.getImageData(0, 0, w, h);

        //store the current globalCompositeOperation
        var compositeOperation = context.globalCompositeOperation;

        //set to draw behind current content
        context.globalCompositeOperation = "destination-over";

        //set background color
        context.fillStyle = backgroundColor;

        //draw background / rect on entire canvas
        context.fillRect(0,0,w,h);
      }

      //get the image data from the canvas
      var imageData = canvas.toDataURL("image/png");

      if(backgroundColor)
      {
        //clear the canvas
        context.clearRect (0,0,w,h);

        //restore it with original / cached ImageData
        context.putImageData(data, 0,0);

        //reset the globalCompositeOperation to what it was
        context.globalCompositeOperation = compositeOperation;
      }

      //return the Base64 encoded data url string
      return imageData;
    },
    random_rgba() {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    },

    addOrNothingNode(n){
      //  console.log(n)
      let found = this.nodes.find(x => x.id === n.id || x.label === n.label)
      if( found == undefined){
        n.mass=1
        this.nodes.push(n)
        return n
      }else{
        found.mass < 50 ? found.mass++ :""
        this.lastX = found.x
        this.lastY = found.y
        return found
      }
    },
    stringOrArray(entries){
      let result = []
      if( entries != undefined ){
        if ( typeof entries == "string" ){
          result.push(entries)
        }else{
          entries.forEach((m) => {
            result.push(m)
          });
        }
      }
      return result
    },
    lastPart(url){
      let lp = url.includes("#") ? url.split("#")[1] : url.substr(url.lastIndexOf('/') + 1)
      if (lp == "me"){
        lp = url.split('/').slice(2,3)[0]
      }
      if(lp == "this"){
        lp = url.substr(url.lastIndexOf('/') + 1)
      }
      return lp
    },

    add2network(response_data){
      //console.log(response_data)
      let donnees = response_data["ldp:contains"]
      console.log("Generique",donnees)
      for (let don in donnees){
        let d = donnees[don]
        console.log("----------------------",d.id)
        var color = this.colorize(d.id)
        let idNode = { id:d.id, label: d.id, shape: "star", classe: d.id, color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)', /*size: 100*/ }
        this.addOrNothingNode(idNode)
        for (const [key, value] of Object.entries(d)) {
          //  console.log(typeof value, key, value)
          if(key != 'id'){
            switch (typeof value) {
              case "string":
              //    console.log("String--",key,'->',value)
              if (key != "pair:description" && key != "pair:content"){
                this.addStringNode(d.id, key, value)
              }else{
                console.log("string-- TODO",key,'->'/*,value*/)
              }

              break;
              case "object":
              if(Array.isArray(value)){
                console.log("Array--",key,'->',value)
                value.forEach((v) => {
                  this.addStringNode(d.id, key, v)
                });


              }else{
                console.log("Object-- TODO",key,'->'/*,value*/)
              }


              break;
              // case "Array":
              // console.log("Array",key,'->',value)
              //
              // break;
              default:
              console.log("!!!!!!! TODO !!!!! NO typeof for ",typeof value,key,'->',value)
            }
          }
        }

      }
      //  console.log("Dataset",this.nodes, this.edges)
    },

    addStringNode(id,key, value){
      //  console.log("Add a ",key)
      var col = this.colorize(key)
      let objectNode = { id:uuidv4(), label: value, shape: "box", classe: key, color: 'rgba('+col.red+', '+col.green+', '+col.blue+',0.5)', /*size: 100*/ }

      //  console.log(objectNode)
      if (value.startsWith('http')){
        objectNode.id = value
      }
      let node = this.addOrNothingNode(objectNode)
      //console.log(node)
      let  propertyEdge = {from: id, to: node.id, label: key}
      //  console.log(propertyEdge)
      this.edges.push(propertyEdge)

    },
    addType(d, type, color){
      let typeNode = {}
      let typeEdge = {}
      typeNode = { id:type, label: this.lastPart(type), shape: "circle", classe: type, color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)', size: 100,  }
      this.addOrNothingNode(typeNode)
      typeEdge = {
        from: d['@id'],
        to: type,
        label: "a",
      }
      //  this.edges.push(typeEdge);
      this.dataset.nodes[typeNode.id] = typeNode
      this.dataset.edges.push(typeEdge)
      this.dataset.types.indexOf(typeNode.id) < 0 ? this.dataset.types.push(typeNode.id) : ""
    },

    add2networkSemapps(response_data){
      let donnees = response_data["ldp:contains"]
      console.log(donnees)
      for (let don in donnees){
        let d = donnees[don]
        //  let color = this.random_rgba()
        var color = this.colorize(d['@id'])


        let label = d['pair:label'] || d['pair:firstName']+' '+d['pair:lastName'] || this.lastPart(d['@id'])
        let subjectNode = { id:d['@id'], label: label, shape: "star", color:'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)' , x:this.lastX , y:this.lastY  }
        //this.addOrNothingNode(subjectNode)
        this.dataset.nodes[subjectNode.id] = subjectNode

        for (const [key, value] of Object.entries(d)) {

          let propertyEdge = {}
          let objectNode = {}
          //console.log("FOR")
          switch (key) {
            // NE rien faire déjà traité ou traité differemment
            case "pair:label":
            case 'pair:firstName':
            case 'pair:lastName':
            case "@id":
            //console.log(key, value);
            break;
            case "@type":
            console.log(typeof d['@type'], d['@type'])
          if (typeof d['@type'] == "object"){
              typeof d['@type'].forEach((t) => {
                this.addType(d,t, color)
              });

            }else{
                  this.addType(d,d['@type'], color)
            }


            break;
            // autres propriétés
            case "pair:involves":
            case 'pair:offeredBy':
            case 'pair:hasMember':
            case 'pair:memberOf':
            case 'pair:hasInterest':
            case 'pair:offers':
            case 'pair:involvedIn':
            case 'pair:interestOf':

            //  console.log("_______________",key, value);
            this.stringOrArray(value).forEach((v) => {
              objectNode = { id:v, label: this.lastPart(v), shape: "box", color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)', x:this.lastX , y:this.lastY  }
              propertyEdge = {from: d['@id'], to: v.replace('pair:',''), label: key}
              //  this.addOrNothingNode(objectNode)
              //  this.edges.push(propertyEdge);

              this.dataset.nodes[objectNode.id] = objectNode
              this.dataset.edges.push(propertyEdge)
            });
            //  console.log(this.stringToColour(key))
            break;

            default:
            console.warn("TODO : ---------------",key/*, value*/);
            this.stringOrArray(value).forEach((v) => {
              objectNode = { id:v, label: this.lastPart(v), shape: "box",  color: 'rgba('+color.red+', '+color.green+', '+color.blue+',0.5)' , x:this.lastX , y:this.lastY  }
              propertyEdge = {from: d['@id'], to: v.replace('pair:',''), label: key}
              //  this.addOrNothingNode(objectNode)
              //  this.edges.push(propertyEdge);
              this.dataset.nodes[objectNode.id] = objectNode
              this.dataset.edges.push(propertyEdge)
            });

          }
        }
      }
    },
  }
}
