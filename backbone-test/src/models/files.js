// const _sync = Backbone.sync
// Backbone.sync = function(method, model, options) {
//   console.log(method + ": " + model.url, model, options);
//   _sync.call( this, method, model, options )
// };



const FilesModel = Backbone.Model.extend({
    urlRoot: 'https://api.dropboxapi.com/2/files/list_folder----model',
    defaults: {
    }
});

const FilesCollection = Backbone.Collection.extend({
    url: 'https://api.dropboxapi.com/2/files/list_folder',
    sync: function(method, model, options) {
        if(method == 'read') {
            const ajaxOpt = _.extend(options, {
                url: model.url,
                method: 'POST',
                data: JSON.stringify({
                    path: '/framework-test'
                })
            });

            const success = options.success;
            options.success = function(resp) {
                let new_resp = resp.entries.map((v) => v);
                success.call(this, new_resp);
            }

            $.ajax(ajaxOpt);
        }
    }
});
export {
    FilesModel, FilesCollection
};