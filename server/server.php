<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$json = file_get_contents("php://input");
$result = addEntries($json);

if (!$result) {
    echo "Entry could not be added";
} else {
    echo $result;
}


function connect(string $host, string $user, string $pass, string $db) : ?mysqli {
    $mysqli = new mysqli($host, $user, $pass, $db);
    if ($mysqli->connect_error) 
        return null;
    return $mysqli;
}

function addRenderingEntry(mysqli $db, string $library, string $scene, string $browser, array $data) : bool {
    $totalMs = $data["profilingTime"];
    $totalFrames = $data["totalFrames"];
    $fpsAvg = $data["fpsAVG"];
    $fpsTruncatedAvg = $data["fpsTruncatedAVG"];
    $fpsMax = $data["fpsMaxAVG"];
    $fpsMin = $data["fpsMinAVG"];
    $fpsLow = $data["fps1Low"];

    $query = "insert into rendering 
              (library, scene, fps_low, fps_min_avg,
              fps_max_avg, fps_truncated_avg, fps_avg, total_frames, total_ms, browser)
              values (?,?,?,?,?,?,?,?,?,?)";

    $stmt = $db->prepare($query);
    $stmt->bind_param("ssssssssss", $library, $scene, $fpsLow, $fpsMin, $fpsMax,     
                      $fpsTruncatedAvg, $fpsAvg, $totalFrames, $totalMs, $browser);
    return $stmt->execute();
}

function addStartupTimeEntry(mysqli $db, string $library, string $scene, int $startupTime) : bool {
    $query = "insert into startup (library, scene, ms) values (?,?,?)";
    $s = $db->prepare($query);
    $s->bind_param("ssi", $library, $scene, $startupTime);
    return $s->execute();
}

function addSceneLoadingEntry(mysqli $db, string $library, string $scene, int $loadingTime) : bool {
    $query = "insert into model_loading (library, scene, ms) values (?,?,?)";
    $s = $db->prepare($query);
    $s->bind_param("ssi", $library, $scene, $loadingTime);
    return $s->execute();
}

function addEntries(string $json) : string {
    $db = connect("localhost", "root", "123", "tcc");
    $data = json_decode($json, true);
    $result = "";
    $library = $data["library"];
    $scene = $data["scene"];
    $browser = $data["browser"];

    if (!empty($data["startupTime"])) {
        addStartupTimeEntry($db, $library, $scene, $data["startupTime"]);
        $result .= "Added startup time = {$data["startupTime"]}\n";
    }
    if (!empty($data["sceneLoadingTime"])) {
        addSceneLoadingEntry($db, $library, $scene, $data["sceneLoadingTime"]);
        $result .= "Added scene loading time = {$data["sceneLoadingTime"]}\n";
    }
    if (!empty($data["performanceData"])) {
        addRenderingEntry($db, $library, $scene, $browser, $data["performanceData"]);
        $dataString = print_r($data, true);
        $result .= "Added rendering data = $dataString\n";
    }

    return $result;
}
