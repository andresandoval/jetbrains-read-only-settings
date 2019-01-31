#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
#set($selectorName = "$CamelCaseName.substring(0,1).toLowerCase()$CamelCaseName.substring(1)")
import {Factory} from '@common/utils/ng-objects';

@Factory({
    name: '${selectorName}Factory'
})
export class ${CamelCaseName}Factory {

    constructor(){}

}