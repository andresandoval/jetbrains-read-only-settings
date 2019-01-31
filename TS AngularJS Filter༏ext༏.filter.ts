#set( $CamelCaseName = "" )
#set( $part = "" )
#foreach($part in $NAME.split("-"))
    #set( $CamelCaseName = "${CamelCaseName}$part.substring(0,1).toUpperCase()$part.substring(1).toLowerCase()" )
#end
#set($selectorName = "$CamelCaseName.substring(0,1).toLowerCase()$CamelCaseName.substring(1)")
import {IFilterService} from "angular";
import {IFilter} from '@common/model/i-filter';
import {Filter} from '@common/utils/ng-objects';

@Filter({
    name: '${selectorName}'
})
export class ${CamelCaseName}Filter {

    public static transform(): IFilter {
        return (value: number, args?:any): string => {
            return value;
        };
    }
}