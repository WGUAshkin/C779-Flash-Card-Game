function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PvipG64deD":
        Script1();
        break;
  }
}

function Script1()
{
  /*Get player to reference*/

var player = GetPlayer();

/*get LMS API*/

var lmsAPI = parent;

/*set score; the first number is the score*/

lmsAPI.SetScore(player.GetVar("z15343Score"), 100, 0);

/*set status; possible values: "completed","incomplete", "failed", "passed"*/

if (player.GetVar("z15343Score") >= player.GetVar("15343PassingPercentage"))
{
     SetStatus("passed");
}
else
{
     SetStatus("failed");
}



}

