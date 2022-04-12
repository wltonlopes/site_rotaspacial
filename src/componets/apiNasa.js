const KEYAPI='Vm6NPNxINDVGQlBiqFPIckn85UPoIAZ1ubnqF4HF';

const url = 'https://api.nasa.gov/planetary/apod?api_key=';

const fetchNASAData = async()=>{
    const response = await fetch(`${url}${KEYAPI}`)
    const data = await response.json()
    console.log(data)
}
export default fetchNASAData;

// {"copyright":"Yizhou Zhang",
// "date":"2021-10-13",
// "explanation":"It may look like a huge cosmic question mark, but the big question really is  how does the bright gas and dark dust tell this nebula's history of star formation.  At the edge of a giant molecular cloud toward the northern constellation Cepheus, the glowing star forming region NGC 7822 lies about 3,000 light-years away. Within the nebula, bright edges and dark shapes stand out in this colorful and detailed skyscape. The 9-panel mosaic, taken over 28 nights with a small telescope in Texas, includes data from narrowband filters, mapping emission from atomic oxygen, hydrogen, and sulfur into blue, green, and red hues. The emission line and color combination has become well-known as the Hubble palette. The atomic emission is powered by energetic radiation from the central hot stars. Their powerful winds and radiation sculpt and erode the denser pillar shapes and clear out a characteristic cavity light-years across the center of the natal cloud. Stars could still be forming inside the pillars by gravitational collapse but as the pillars are eroded away, any forming stars will ultimately be cut off from their reservoir of star stuff. This field of view spans over 40 light-years across at the estimated distance of NGC 7822.",
// "hdurl":"https://apod.nasa.gov/apod/image/2110/NGC7822_Yizhou_4044.jpg",
// "media_type":"image",
// "service_version":"v1",
// "title":"NGC 7822: Cosmic Question Mark",
// "url":"https://apod.nasa.gov/apod/image/2110/NGC7822_Yizhou_960.jpg"}