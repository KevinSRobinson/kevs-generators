
   
   
   
   
  //////////////////////////////////////////////////////////////////////////////////////////// 
  //  
  ///////////////////////////////////////////////////////////////////////////////////////////
  var AddTolayoutControl = function (data, key, subkey) {
    switch (data.model.properties[key][subkey]) {
      case "string":
        return getAddTolayoutControl(data, 'te', key);
      case "date":
        return getAddTolayoutControl(data, 'de', key);
      case "bool":
        return getAddTolayoutControl(data, 'ce', key);
      case "number":
        return getAddTolayoutControl(data, 'ne', key);
    }
  };

  var getAddTolayoutControl = function (data, prefix, key) {
    return 'Me.LayoutControl1.Controls.Add(Me.' + prefix + data.getNameFromKey(key) + ')';
  };


  
  var GetLayoutControlItem = function (data, key) {
    return 'Me.lci' + data.getNameFromKey(key) + '.Control = Me.te' + data.getNameFromKey(key) + '\r' +
      'Me.lci' + data.getNameFromKey(key) + '.Location = New System.Drawing.Point(0, 0)' + '\r' +
      'Me.lci' + data.getNameFromKey(key) + '.Size = New System.Drawing.Size(231, 24)' + '\r' +
      `Me.lci` + data.getNameFromKey(key) + `.Text = "` + data.getNameFromKey(key) + `" \r` +
      'Me.lci' + data.getNameFromKey(key) + '.TextSize = New System.Drawing.Size(51, 13)' + '\r';
  };



module.exports.AddTolayoutControl = AddTolayoutControl;
module.exports.GetLayoutControlItem = GetLayoutControlItem;