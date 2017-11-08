<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class ucEdit<%=data.model.title%>
    Inherits DevExpress.XtraEditors.XtraUserControl

    'UserControl overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        If disposing AndAlso components IsNot Nothing Then
            components.Dispose()
        End If
        MyBase.Dispose(disposing)
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.LayoutControl1 = New DevExpress.XtraLayout.LayoutControl()
        Me.LayoutControlGroup1 = New DevExpress.XtraLayout.LayoutControlGroup()
        '''''''''''''''''''''''''''''''''''''''''''''''''
        ''''''''''''    Instantiate    '''''''''''''''''         
        '''''''''''''''''''''''''''''''''''''''''''''''''
        <% for (var key in data.model.properties) {  
           for (var subkey in data.model.properties[key]) { %>
                <%=data.InstantiateControl(key, subkey)%>
            <% } %>  
            Me.lc<%= key %> = New  CustomControls.Editors.QloadLabel()
            Me.lci<%= key %> = New DevExpress.XtraLayout.LayoutControlItem()
       <% } %>  

        '''''''''''''''''''''''''''''''''''''''''''''''''
        '''''''''''''''''''''''''''''''''''''''''''''''''
        CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.LayoutControl1.SuspendLayout()
        CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).BeginInit()



        '''''''''''''''''''''''''''''''''''''''''''''''''
        ''''''''''''    BeginInit    '''''''''''''''''         
        '''''''''''''''''''''''''''''''''''''''''''''''''
        <% for (var key in data.model.properties) {  
             for (var subkey in data.model.properties[key]) { %>               
                    CType(Me.lci<%= key%>, System.ComponentModel.ISupportInitialize).BeginInit()
             <% } %>
        <% } %>
         Me.SuspendLayout()






          ' '''''''''''''''''''''''''''''''''''''''''''''''''
        ''''''''''''    Add to Layout Control   '''''''''''''''''         
        '''''''''''''''''''''''''''''''''''''''''''''''''
                '
                 <% for (var key in data.model.properties) {  
             for (var subkey in data.model.properties[key]) { %>               
                    <%= data.AddTolayoutControl(data, key, subkey) %>  
             <% } %>
        <% } %>
               
               
               





                Me.LayoutControl1.Dock = System.Windows.Forms.DockStyle.Fill
                Me.LayoutControl1.Location = New System.Drawing.Point(0, 0)
                Me.LayoutControl1.Name = "LayoutControl1"
                Me.LayoutControl1.Root = Me.LayoutControlGroup1
                Me.LayoutControl1.Size = New System.Drawing.Size(274, 162)
                Me.LayoutControl1.TabIndex = 0
                Me.LayoutControl1.Text = "LayoutControl1"





        '
        'LayoutControlGroup1
        '
        Me.LayoutControlGroup1.EnableIndentsWithoutBorders = DevExpress.Utils.DefaultBoolean.[True]
        Me.LayoutControlGroup1.GroupBordersVisible = False



        Me.LayoutControlGroup1.Items.AddRange(New DevExpress.XtraLayout.BaseLayoutItem() { <%=data.commaSeperatedLayoutControlList %>})
 

        Me.LayoutControlGroup1.Location = New System.Drawing.Point(0, 0)
        Me.LayoutControlGroup1.Name = "LayoutControlGroup1"
        Me.LayoutControlGroup1.Size = New System.Drawing.Size(251, 111)
        Me.LayoutControlGroup1.TextVisible = False



                'lciFollowupDate
                '
               
                 <% for (var key in data.model.properties) {  
                        for (var subkey in data.model.properties[key]) { %>             


                           <%=  data.SetLayoutControl(key, subkey) %>


                            Me.lci<%= data.getNameFromKey(key) %>.CustomizationFormText = "<%= data.getNameFromKey(key) %>"
                            Me.lci<%= data.getNameFromKey(key) %>.Location = New System.Drawing.Point(0, 68)
                            Me.lci<%= data.getNameFromKey(key) %>.Name = "lci<%= data.getNameFromKey(key) %>"
                            Me.lci<%= data.getNameFromKey(key) %>.Size = New System.Drawing.Size(274, 17)
                            Me.lci<%= data.getNameFromKey(key) %>.Text = "<%= data.getNameFromKey(key) %>"
                            Me.lci<%= data.getNameFromKey(key) %>.TextSize = New System.Drawing.Size(94, 13)
                    <% } %>
                <% } %>    
        
       Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
                Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
                Me.Controls.Add(Me.LayoutControl1)
                Me.Margin = New System.Windows.Forms.Padding(0)
                Me.Name = "ucEnquiryFields"
                Me.Size = New System.Drawing.Size(274, 162)
                CType(Me.LayoutControl1, System.ComponentModel.ISupportInitialize).EndInit()
                Me.LayoutControl1.ResumeLayout(False)
                Me.LayoutControl1.PerformLayout()

                  CType(Me.LayoutControlGroup1, System.ComponentModel.ISupportInitialize).EndInit() 
                 
                 <% for (var key in data.model.properties) {  
                        for (var subkey in data.model.properties[key]) { %>     
                             CType(Me.lci<%= data.getNameFromKey(key) %>, System.ComponentModel.ISupportInitialize).EndInit() 
                    <% } %>
                <% } %>      


               
               
         
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents LayoutControl1 As DevExpress.XtraLayout.LayoutControl
    Friend WithEvents LayoutControlGroup1 As DevExpress.XtraLayout.LayoutControlGroup

     <% for (var key in data.model.properties) {  
         for (var subkey in data.model.properties[key]) {   %>
             <%= data.ControlFields(key, subkey) %>  <% } %>  
            Friend WithEvents lc<%= key %> As CustomControls.Editors.QloadLabel
            Friend WithEvents lci<%= key %> As DevExpress.XtraLayout.LayoutControlItem
    <% } %>  

End Class
