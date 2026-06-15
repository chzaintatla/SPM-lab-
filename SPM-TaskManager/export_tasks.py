"""Export tasks (JSON) to CSV.

Usage: python export_tasks.py tasks.json output.csv
"""
import csv
import json
import sys
from pathlib import Path


def load_tasks(path):
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Tasks file not found: {path}")
    return json.loads(p.read_text(encoding="utf-8"))


def export_to_csv(tasks, out_path):
    fieldnames = ["id", "title", "status", "description"]
    with open(out_path, "w", newline='', encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for t in tasks:
            row = {k: t.get(k, "") for k in fieldnames}
            writer.writerow(row)


def main(argv=None):
    argv = argv or sys.argv[1:]
    if len(argv) < 2:
        print("Usage: python export_tasks.py tasks.json out.csv")
        return 2
    tasks = load_tasks(argv[0])
    export_to_csv(tasks, argv[1])
    print(f"Exported {len(tasks)} tasks to {argv[1]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
