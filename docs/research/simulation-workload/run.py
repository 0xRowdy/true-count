"""Sequential reproducible timing samples; set BENCH_NODE to a Node 24 binary."""
import json
import os
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parent
node = os.environ.get("BENCH_NODE", "node")
cases = [
    ("roulette-flat-single", 100000),
    ("roulette-flat-double", 100000),
    ("roulette-envelope-small", 200),
    ("roulette-envelope-wide", 10),
    ("craps-pass", 100000),
    ("craps-forced-tail", 2000),
]
with (root / "results.jsonl").open("w") as output:
    for args in [("environment",), ("verify",)]:
        line = subprocess.check_output([node, str(root / "benchmark.ts"), *args], text=True)
        output.write(line)
        output.flush()
        print(line, end="", flush=True)
    for name, sessions in cases:
        for sample in range(3):
            line = subprocess.check_output(
                [node, str(root / "benchmark.ts"), name, str(sessions), str(sample)], text=True
            )
            json.loads(line)  # fail rather than preserve malformed measurements
            output.write(line)
            output.flush()
            print(line, end="", flush=True)
