import * as React from "react"
import { Link } from "gatsby"

import { useParams } from "@reach/router"
import { StaticImage } from "gatsby-plugin-image"

import {Flex, Heading, Box, Button, Image} from "rebass"

import Skeleton from "react-loading-skeleton";

import Layout from "../components/layout"
import Seo from "../components/seo"

import  background from "../images/background/bc_bibs.jpg"

const SecondPage = () => {
	const {id} = useParams()
	const [data, setData] = React.useState(false)

	const download = e => { 
	    fetch(e.event_media_link, {
	      method: "GET",
	      headers: {}
	    })
	      .then(response => {
	        response.arrayBuffer().then(function(buffer) {
	          const url = window.URL.createObjectURL(new Blob([buffer]));
	          const link = document.createElement("a");
	          link.href = url;
	          link.setAttribute("download", e.event_name+"-bib."+e.event_media_format); //or any other extension
	          document.body.appendChild(link);
	          link.click();
	        });
	      })
	      .catch(err => {
	        console.log(err);
	      });
	  };

	React.useEffect(() => {
		const apiBase = 'https://api.virtualrun.world/GET/event/bib/';
		fetch(apiBase+id)
		.then(response => response.json())
		.then(res => {
		  	setData(res)
		});

  	},[id]);

	console.log(data)
	return(
	  <Flex flexWrap='wrap'>
	  	<Box width={'100%'} height={'100vh'} style={{background: 'url('+background+') no-repeat center', backgroundSize:'cover', position:'absolute',zIndex:'-1'}}/> 
	    <Box width={1} py={2} bg='#808080a3' >
	    	<Heading fontSize={5} textAlign='center'> Download your bib </Heading>
	    </Box>
	    <Flex width={1} flexWrap='wrap' px={[1,3,5]}>
	    	{!data &&(<Skeleton />)}
	    	{data &&(
	    		data.map((b,i) => (
	    			<Box width={1} key={i} my={2} >
	    				<Flex flexWrap='wrap' bg='#ffffffbd'>
	    					<Box p={1} width={[1,1/3]} textAlign='center' >
	    						<Image m={0} height={['150px']} src={b.event_media_link} />
	    					</Box>
	    					<Box width={[1,2/3]} textAlign='center'>
	    						<Heading textAlign='center' py={[1,2,3]}>{b.event_name} {b.race_name&&(b.race_name)} </Heading>
	    						<Button onClick={()=>download(b)} style={{cursor:'pointer'}} bg='blue' my={1} px={1} width={[1,'auto']}>Download</Button>
	    					</Box>
	    				</Flex>
	    			</Box>
	    		))
	    		
	    	)}
	    	
	    </Flex>
	  </Flex>
  )
}

export default SecondPage
