"""Validate timing-repeat identity and derive the report's illustrative costs."""
from pathlib import Path
import hashlib
import json
import math
import statistics

root = Path(__file__).resolve().parent
records = [json.loads(line) for line in (root / "results.jsonl").read_text().splitlines()]
assert records[0]["sourceSha256"] == hashlib.sha256((root / "benchmark.ts").read_bytes()).hexdigest()
assert records[1]["verification"] == "passed"
rows = [row for row in records if "msPerSession" in row]
summary = {}
for name in dict.fromkeys(row["name"] for row in rows):
    samples = [row for row in rows if row["name"] == name]
    assert len(samples) == 3
    outcomes = ["sessions", "turns", "tail", "tailP95", "maxTail", "maxTailSession",
                "draws", "wins", "losses", "counter", "net", "drawdownSum"]
    assert all(all(row[key] == samples[0][key] for key in outcomes) for row in samples)
    median = statistics.median(row["msPerSession"] for row in samples)
    result = {
        "samples": 3,
        "sessionsOrTapesPerSample": samples[0]["sessions"],
        "medianMs": median,
        "minMs": min(row["msPerSession"] for row in samples),
        "maxMs": max(row["msPerSession"] for row in samples),
        "tailMean": samples[0]["tail"] / samples[0]["sessions"],
        "tailP95": samples[0]["tailP95"],
        "tailMax": samples[0]["maxTail"],
    }
    if name == "craps-forced-tail":
        result["microsecondsPerTapeRoll"] = median * 1000 / 10001
    else:
        # All estimates assume one task, k=1, no startup/I/O/free tier.
        seconds = median * 100000 / 1000
        result.update({
            "profileSeconds": seconds,
            "cloudRunOneJobK1": max(60, math.ceil(seconds * 10) / 10) * .000020,
            "fargateOneJobK1": max(60, math.ceil(seconds)) * .000013714,
        })
    summary[name] = result
(root / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
print("Validated source digest and deterministic outcomes across all timing repeats.")
