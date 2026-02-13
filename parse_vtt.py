#!/usr/bin/env python3
import re
import json
from datetime import datetime

# VTT 파일 읽기
with open('output/3HK9e0S6WFc.ko.vtt', 'r', encoding='utf-8') as f:
    vtt_content = f.read()

# VTT 파싱 - 텍스트만 추출
# 타임스탬프 패턴 제거
time_pattern = re.compile(r'\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}')
# XML 태그 제거 (<c>, <00:00:07.359> 등)
xml_pattern = re.compile(r'<[^>]+>')
# WEBVTT 헤더 제거
header_pattern = re.compile(r'^WEBVTT|^Kind:|^Language:', re.MULTILINE)

# 파싱
lines = vtt_content.split('\n')
transcript_entries = []
current_entry = None

for line in lines:
    line = line.strip()

    # 빈 줄 무시
    if not line:
        continue

    # 헤더 무시
    if line.startswith('WEBVTT') or line.startswith('Kind:') or line.startswith('Language:'):
        continue

    # 타임스탬프 라인 무시
    if time_pattern.match(line):
        continue

    # 텍스트 라인 - XML 태그 제거
    clean_text = xml_pattern.sub('', line).strip()
    if clean_text:
        transcript_entries.append(clean_text)

# 중복 제거 (연속된 중복만)
unique_entries = []
prev_text = None
for entry in transcript_entries:
    if entry != prev_text:
        unique_entries.append(entry)
        prev_text = entry

# 전체 텍스트
transcript_text = '\n'.join(unique_entries)

# 영상 정보
video_id = "3HK9e0S6WFc"
video_title = "[빈난새의 개장전요것만-2월13일] 올해 3번 인하 등장 | 트럼프 철강관세 축소 검토 | 갑자기 저승사자 된 AI | AMAT ANET 코인베이스 리비안 더치브로 릴리 비트마인"
video_url = f"https://www.youtube.com/watch?v={video_id}"

print(f'Transcript length: {len(transcript_text)} characters')
print(f'Number of entries: {len(unique_entries)}')
print(f'First 200 characters: {transcript_text[:200]}...')

# JSON 저장
output_data = {
    'video_id': video_id,
    'title': video_title,
    'url': video_url,
    'transcript_entries': unique_entries,
    'transcript_text': transcript_text,
    'transcript_length': len(transcript_text),
    'generated_at': datetime.now().isoformat()
}

output_file = f'output/{video_id}_transcript.json'
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f'✅ Saved: {output_file}')
