"""Demo runner that exercises `task_stats.py` and `export_tasks.py`.

Usage: python demo.py
"""
import subprocess
import sys
from pathlib import Path


def run(cmd):
    print(f"> {' '.join(cmd)}")
    r = subprocess.run(cmd, capture_output=True, text=True)
    print(r.stdout)
    if r.stderr:
        print(r.stderr, file=sys.stderr)
    return r.returncode


def main():
    base = Path(__file__).parent
    sample = base / "sample_tasks.json"
    if not sample.exists():
        print("sample_tasks.json not found")
        return 2
    # Run stats
    code = run([sys.executable, str(base / "task_stats.py"), str(sample)])
    if code != 0:
        return code
    # Export to CSV
    out = base / "out.csv"
    code = run([sys.executable, str(base / "export_tasks.py"), str(sample), str(out)])
    return code


if __name__ == '__main__':
    raise SystemExit(main())
