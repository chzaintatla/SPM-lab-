"""Small utility to compute basic statistics from a tasks JSON file.

Expected input: a JSON file containing a list of tasks where each task is
an object with at least the keys: `id`, `title`, `status`.

Status is expected to be one of: "todo", "in-progress", "done".
This script is intentionally lightweight and dependency-free.
"""
from collections import Counter
import json
import sys
from pathlib import Path


def load_tasks(path):
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"Tasks file not found: {path}")
    return json.loads(p.read_text(encoding="utf-8"))


def stats(tasks):
    total = len(tasks)
    statuses = Counter(t.get("status", "unknown") for t in tasks)
    return {
        "total": total,
        "by_status": dict(statuses),
    }


def pretty_print(s):
    print(f"Total tasks: {s['total']}")
    print("By status:")
    for k, v in s["by_status"].items():
        print(f"  {k}: {v}")


def main(argv=None):
    argv = argv or sys.argv[1:]
    if not argv:
        print("Usage: python task_stats.py <tasks.json>")
        return 2
    path = argv[0]
    tasks = load_tasks(path)
    s = stats(tasks)
    pretty_print(s)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
