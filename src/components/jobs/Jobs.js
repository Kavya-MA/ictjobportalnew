
import React from "react"
const Jobs=(props)=>
{
    const { posts } = props;
    return (
        <div>
            
            {posts.map((i, key) => (
                <div key={key} className='abc'>
                    
                    
                    <h3>{i.jobtitle}</h3>
                    
                   
                   
                </div>
            ))}
        </div>
    );
}

  
            
export default Jobs;