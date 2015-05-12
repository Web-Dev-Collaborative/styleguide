# Panels

{% example html %}
<div class="panel panel-default">
    <div class="panel-heading">
        <b>Title</b>
    </div>
    <div class="panel-body">
        Body of the panel
    </div>
    <div class="panel-footer">
        Optional footer of the panel
    </div>
</div>
{% endexample %}

Panels can also include a `.list-group`.

{% example html %}
<div class="panel panel-default">
    <div class="panel-heading">
        <b>Title</b>
    </div>
    <div class="list-group">
        <a href="#" class="list-group-item">Item 1</a>
        <a href="#" class="list-group-item active">Item 2</a>
        <a href="#" class="list-group-item">Item 3</a>
    </div>
    <div class="panel-footer">
        Optional footer of the panel
    </div>
</div>
{% endexample %}
