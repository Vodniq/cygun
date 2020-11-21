UI.AddSubTab(["Rage", "SUBTAB_MGR"], "cygan")
UI.AddCheckbox(["Rage", "cygan", "cygan"], "cygan")
Local.SetClanTag("cygun.com");

function main() {

    username = Cheat.GetUsername();

    var font = Render.AddFont("Arial.ttf", 15, 800)
    Render.String(100, 40, 0, "CYGUN INJECTED WITAJ W RUMUNI " + username, [255, 0, 255, 255], font)
    return;
}
Cheat.RegisterCallback("Draw", "main")

function drawTexture() {
    forumBG = Render.AddTexture("ot/scripts/cygun.jpg");
    Render.TexturedRect(100, 60, 200, 200, forumBG);
    return;
}
Cheat.RegisterCallback("Draw", "drawTexture");






