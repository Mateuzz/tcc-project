<?php

function connect(string $host, string $user, string $pass, string $db) : ?mysqli {
    $mysqli = new mysqli($host, $user, $pass, $db);
    if ($mysqli->connect_error) 
        return null;
    return $mysqli;
}

function addRenderingEntry(mysqli $db, array $data) : bool {
    $library = $data["libraryName"];
    $scene = $data["sceneName"];
    $testData = $data["data"]["renderingTest"];
    $totalMs = $testData["totalMS"];
    $totalFrames = $testData["totalFrames"];
    $fpsAvg = $testData["fpsAVG"];
    $fpsTruncatedAvg = $testData["fpsTruncatedAVG"];
    $fpsMax = $testData["fpsMaxAVG"];
    $fpsMin = $testData["fpsMinAVG"];
    $fpsLow = $testData["fps1Low"];

    $query = "insert into rendering_stats 
    (library_name, scene_name, fps_low, fps_min_avg,
    fps_max_avg, fps_truncated_avg, fps_avg, total_frames, total_ms)
    values (?,?,?,?,?,?,?,?,?)";

    $stmt = $db->prepare($query);
    $stmt->bind_param("sssssssss", $library, $scene, $fpsLow, $fpsMin, $fpsMax, $fpsTruncatedAvg, $fpsAvg, $totalFrames, $totalMs);
    return $stmt->execute();
}

function addInitializationEntry(mysqli $db, array $data) : bool {
    $library = $data["libraryName"];
    $scene = $data["sceneName"];
    $sceneStartupMS = $data["data"]["startUpTest"]["sceneStartupMS"];
    $modelLoadingMS = $data["data"]["startUpTest"]["modelLoadingMS"];

    $query = "insert into initialization_stats 
        (library_name, scene_name, scene_startup_ms, model_loading_ms) 
        values (?,?,?,?)";

    $stmt = $db->prepare($query);
    $stmt->bind_param("ssss", $library, $scene, $sceneStartupMS, $modelLoadingMS);
    return $stmt->execute();
}

function addEntries(string $json) : bool {
    $db = connect("localhost", "root", "123", "tcc");
    $jsonData = json_decode($json, true);

    $result = addRenderingEntry($db, $jsonData);
    $result |= addInitializationEntry($db, $jsonData);

    return $result;
}

/* $configFile = file_get_contents("config.json"); */
/* $config = json_decode($configFile, true); */

header("Access-Control-Allow-Origin: *");

if (isset($_POST['data']) && isset($_POST['library']) && isset($_POST['scene'])) {
    $json = $_POST['data'];
    $library = $_POST['library'];
    $scene = $_POST['scene'];

    /* $testId = $config[$library][$scene]++; */
    /* $filename = "$library-$scene-$testId"; */
    /* $file = fopen($filename, "w"); */
    /* fwrite($file, $json, strlen($json)); */
    /* fclose($file); */

    if (!addEntries($json)) {
        http_response_code(500);
        die("Failed");
    };

    /* $newConfig = json_encode($config, JSON_PRETTY_PRINT); */
    /* $file = fopen("config.json", "w"); */
    /* fwrite($file, $newConfig, strlen($newConfig)); */
    /* fclose($file); */

    /* echo "$filename Created with data"; */
    echo $json . "\n";
}


?>
