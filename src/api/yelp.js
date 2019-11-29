import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
       Authorization: 'Bearer 3tL-L2YUD0AnstXz5usrtm9hAOZUaPvgN3I-0SBSH3eYne4jNsp7ki2IYJnMyKPAtVQqvRu4Yyqu0ADcGRD1X_8WKMoZpf24vWb5zTqcy1PNTcRquqRe-_eG-lzSXXYx'
   } 
});