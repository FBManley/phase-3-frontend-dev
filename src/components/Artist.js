import React from 'react'
// import React, { useState } from "react";
// show record label list? button for crud

const Artist = ({artist}) => {
    // console.log(artist)
  return (
    <div>Artist
        <thead>
            <tr>
                <th>{artist.name}</th>
                <th>{artist.albums}</th>
                <th>
                    <button></button>
                </th>
            </tr>
        </thead>
        
    </div>
  )
}

export default Artist;