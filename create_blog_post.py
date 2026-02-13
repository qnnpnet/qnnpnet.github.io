#!/usr/bin/env python3
import json
from datetime import datetime

# 요약 데이터 읽기
with open('output/3HK9e0S6WFc_summary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

video_id = data['video_id']
video_title = data['title']
video_url = data['url']
transcript_length = data['transcript_length']
expert_analysis = data['expert_analysis']
generated_at = data['generated_at']

# Markdown 생성
markdown_content = f"""---
title: "{video_title}"
date: {datetime.now().strftime('%Y-%m-%d')}
video_id: {video_id}
tags: [한경글로벌마켓, 주식, 경제, 뉴욕증시, 미국주식]
---

# {video_title}

[영상 보기]({video_url})

## 전문가 분석

{expert_analysis}

## 영상 정보

- **채널**: 한경 글로벌마켓
- **영상 ID**: {video_id}
- **자막 길이**: {transcript_length} 자
- **생성 시각**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## 참고

이 요약은 YouTube 자동생성 자막을 기반으로 작성되었습니다. 자동생성 자막의 정확도가 낮을 수 있으니, 원본 영상을 확인해주세요.
"""

# Markdown 저장
output_file = f'output/{video_id}_auto_captions.md'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(markdown_content)

print(f'✅ Saved: {output_file}')
