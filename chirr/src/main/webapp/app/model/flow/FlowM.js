Ext.define('App.model.flow.FlowM',{
    extend:'Fwk.data.Model',
    idProperty: 'id',
    fields:[
            {
                name:'id',
                type:'auto'
            },
            {
                name:'name',
                type:'string'
            },
            {
                name:'owner',
                type:'auto'
            },
            {
                name:'stream',
                type:'auto'
            },
            {
                name:'unread',
                type:'int'
            }
            ]
});