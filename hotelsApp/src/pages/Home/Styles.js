import { Platform, Dimensions } from 'react-native';

let screenWidth = Dimensions.get('window').width;

const scaleToDimension = (size) => {
    return screenWidth * size / 375
};

export default {
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 300,
        height: 110,
        borderRadius:10
    },
    listHotels:{    
        width: '100%', 
        borderRadius: 20,
        height: 205, 
        justifyContent: 'center', 
        alignItems: 'center',
        alignContent:'center',
        position: 'absolute',
        bottom: 0
    },
    topContainer: {
        backgroundColor: 'white'
    },
    bottomContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    bottomContainer: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    subtitle: {
        fontSize:16,
        fontFamily:'Georgia', 
        color:'#666666'
    },
    searchBar:{
        borderRadius:12,
        marginBottom:5,
        justifyContent: 'center',
        fontSize:16,
        height:45,
        marginHorizontal:15,
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
    },
    cardMap:{
        flex:1,
        marginBottom:5,
        backgroundColor:'#db6e2e', 
        borderRadius:10, 
        alignItems:'center', 
        marginTop:5,
        justifyContent:'center'
    },
    card:{
        ...Platform.select({
            ios: {
              padding: 10,
              shadowColor: 'gray',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 5,
              shadowOpacity: 0.75
            },
            android: {
              elevation: 1,
            }
        }),
        position: 'relative',
        borderRadius: 10,
        width: 300,
        height: 200,
        marginLeft:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(255,255,255,0.8)'
    },
    container: {
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    viewTitle:{
        marginHorizontal:15,
        marginBottom:15
    },
    title:{
        fontSize:38,
        color:'#5c5c5c'
    },  
    searchBarHome:{
        borderRadius:12,
        justifyContent: 'center',
        fontSize:18,
        height:65,
        marginHorizontal:15,
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
    },
    btn:{
        alignItems:'center',
        marginTop:15
    },
    navigationHeaderContainer: {
        width:60,
        color: "blue",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:12,
        borderRadius:180,
        backgroundColor: 'rgba(54, 53, 52, 0.8)', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,  
    },
    navigationHeaderContainer1: {
        height: 30,
        width:70,
        color: "blue",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:12,
        borderRadius:180,
        backgroundColor:'rgba(54, 53, 52,0.8)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,  
    },
    DetailMainContainer: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    titleDetial:{
        fontSize:38,
        color:'#db6e2e'
    },  
    subtitleDetail: {
        fontSize:24,
        color: '#4f4e4e'
    },
    navigationImages:{
        flexDirection:'row'
    },
    imageDetail : {
        width:30, 
        height:30
    },
    detailTopContainer: {
        flex:1,
        height: scaleToDimension(200),
        width: screenWidth,
        alignItems:'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
    }, 

}