function update_settings()
{
	var tmp = $("[name='setting-layout']:checked").val();
	$(".page-wrapper").removeClass("wide");
	$(".page-wrapper").removeClass("boxed");
	$(".page-wrapper").addClass(tmp);
}

function toggle_settings()
{
	if($(".page-settings-container").hasClass("closed"))
	{
		$(".page-settings-container").removeClass("closed")
		$(".page-settings-container").addClass("open")
	}
	else
	{
		$(".page-settings-container").removeClass("open")
		$(".page-settings-container").addClass("closed")
	}
}

$(function(){
	update_settings();
});