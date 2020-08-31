// add html to tweaks
function MakeHTML() {
    for(var i = 0; i < tweaks.length; i++) {
        var html = "<li class=\"list-group-item\">\n" +
            "    <div class=\"row\">\n" +
            "        <div class=\"col-sm d-flex justify-content-start\">\n" +
            "            <p><b>TITLE</b><a href=\"#HIDE\" data-toggle=\"collapse\" class=\"ml-4\">Show Change</a></p>\n" +
            "        </div>\n" +
            "        <div class=\"col-sm d-flex justify-content-end\">\n" +
            "            <form class=\"form-inline\">\n" +
            "                <label for=\"SELECTION\" class=\"mr-sm-2\">Action: </label>\n" +
            "                <select id=\"SELECTIONA\" class=\"custom-select\">\n" +
            "                    <option selected>None</option>\n" +
            "                    <option value=\"apply\">Apply</option>\n" +
            "                    <option value=\"cancel\">Reverse</option>\n" +
            "                </select>\n" +
            "            </form>\n" +
            "        </div>\n" +
            "    </div>" +
            "    <div id=\"HIDEA\" class=\"collapse\">"

        html = html.replace("TITLE", tweaks[i].title);
        var hide = "HIDE-" + i;
        html = html.replace("HIDE", hide);
        html = html.replace("HIDEA", hide);
        var selection = "SELECTION-" + i;
        html = html.replace("SELECTION", selection);
        html = html.replace("SELECTIONA", selection);

        for(var j = 0; j < tweaks[i].lines.length; j++) {
            html = html + "<p>" + tweaks[i].lines[j] + "</p>";
        }

        html = html + "</div>\n" +
            "</li>";

        tweaks[i].html = html;
    }
}

// add tweaks to page
function FillPage() {
    MakeHTML();
    for(var i = 0; i < tweaks.length; i++) {
        var ul = document.getElementById("tweaks");
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerHTML = tweaks[i].html;
        ul.appendChild(li);
    }
}

// export text to a file, from https://gist.github.com/danallison/
function DownloadText(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });

    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

// generate text and call export
function Generate() {
    var tweaksReady = false;

    for(var i = 0; i < tweaks.length; i++) {
        var elementID = "SELECTION-" + i;
        var dropbox = document.getElementById(elementID);
        tweaks[i].selected = dropbox.selectedIndex;
        if(dropbox.selectedIndex > 0) {
            tweaksReady = true;
        }
    }

    if(!tweaksReady) {
        alert("No tweaks are selected for .reg file generation.")
    }
    else {
        var outreg = "Windows Registry Editor Version 5.00\n\n" +
            "; ----- Generated using https://arwhitus.github.io/RegistryTweakGenerator/ ----- ;\n\n\n";

        for(var i = 0; i < tweaks.length; i++) {
            if(tweaks[i].selected === 1) {
                outreg = outreg + "; " + tweaks[i].title + "\n";
                for(var j = 0; j < tweaks[i].lines.length; j++) {
                    outreg = outreg + tweaks[i].lines[j] + "\n";
                }
                outreg = outreg + "\n";
            }
            else if(tweaks[i].selected === 2) {
                outreg = outreg + "; " + tweaks[i].title + " - REVERSED\n";
                for(var j = 0; j < tweaks[i].revlines.length; j++) {
                    outreg = outreg + tweaks[i].revlines[j] + "\n";
                }
                outreg = outreg + "\n";
            }
        }

        DownloadText(outreg, "text/reg", "tweaks.reg");
    }
}

window.onload = FillPage;