"""Simple CLI to print skills from my_skills.txt

Usage: python skills_cli.py
"""
from pathlib import Path


def main():
    p = Path(__file__).with_name("my_skills.txt")
    if not p.exists():
        print("my_skills.txt not found")
        return 1
    lines = [l.strip() for l in p.read_text(encoding="utf-8").splitlines() if l.strip()]
    print("Skills:")
    for i, s in enumerate(lines, 1):
        print(f"{i}. {s}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
